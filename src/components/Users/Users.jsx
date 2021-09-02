import axios from 'axios';
import React, { useState } from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import { usersAPI } from '../../api/api';
import { updatePage } from '../../Redux/users-reducer';
let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages[i - 1] = i;
	}
	const [page, setPage] = useState(props.currentPage);
	const onPreviousPageClick = () => {
		if (page > 1) {
			setPage(page - 1);
			props.onPageChange(page - 1)
		}
	}
	const onNextPageClick = () => {
		setPage(page + 1);
		props.onPageChange(page + 1)
	}

	return (
		<div className={s.usersPage}>
			<div className={s.users}>
				{props.users.map(u =>
					<div key={u.id} className={s.usersContent}>
						<div>
							<div><NavLink to={`/profile/${u.id}`}><img className={s.usersAvatar} src={u.photos.small != null ? u.photos.small : userPhoto} /></NavLink></div>
							<div>
								{u.followed
									? <button disabled={props.followingInProgress.some(id => id === u.id)}
										onClick={() => { { props.unfollow(u.id) } }} className={s.followBtn}>unfollow</button>
									: <button disabled={props.followingInProgress.some(id => id === u.id)}
										onClick={() => { { props.follow(u.id) } }} className={s.followBtn}>follow</button>}
							</div>
						</div>
						<div className={s.usersInfo}>
							<div>
								<div>{u.name}</div>
								<div>{u.status != null ? u.status : 'No Status'}</div>
							</div>
							<div>
							</div>
						</div>
					</div>
				)
				}
				<div className={s.pageNumbers}>
					{page > 1 ?
						<div onClick={onPreviousPageClick} className={`s.paginationItem ${s.previousPagination}`}>Previous</div>
						: false
					}
					{
						page > 3 ?
							<div onClick={(e) => props.onPageChange(1)} className={(page === 1 ? `s.selectedPage ${s.paginationItem}` : s.paginationItem)}>{1}</div>
							:
							''
					}
					{
						<div className={s.pagesPagination}>
							{page - 2 >= 1 && page - 2 <= pages.length
								? <div onClick={(e) => props.onPageChange(page - 2)} className={page === page - 2 ? `s.selectedPage ${s.paginationItem}` : s.paginationItem}>{page - 2}</div>
								: false
							}
							{page - 1 >= 1 && page - 1 <= pages.length
								? <div onClick={(e) => props.onPageChange(page - 1)} className={page === page - 1 ? `s.selectedPage ${s.paginationItem}` : s.paginationItem}>{page - 1}</div>
								: false
							}
							{page >= 1 && page <= pages.length
								? <div onClick={(e) => props.onPageChange(page)} className={page === page ? `s.selectedPage ${s.paginationItem}` : s.paginationItem}>{page}</div>
								: false
							}
							{page + 1 >= 1 && page + 1 <= pages.length
								? <div onClick={(e) => props.onPageChange(page + 1)} className={page === page + 1 ? `s.selectedPage ${s.paginationItem}` : s.paginationItem}>{page + 1}</div>
								: false
							}
							{page + 2 >= 1 && page + 2 <= pages.length
								? <div onClick={(e) => props.onPageChange(page + 2)} className={page === page + 2 ? `s.selectedPage ${s.paginationItem}` : s.paginationItem}>{page + 2}</div>
								: false
							}						</div>
					}
					{
						page < pages.length - 2 ?
							<div onClick={(e) => props.onPageChange(pages.length)} className={page === pages.length ? `s.selectedPage ${s.paginationItem}` : s.paginationItem}>{pages.length}</div>
							:
							''
					}
					{
						page < pages.length ?
							<div onClick={onNextPageClick} className={`s.paginationItem ${s.nextPagination}`}>Next</div>
							: false
					}

				</div>
			</div>
		</div>

	);

}

export default Users;
