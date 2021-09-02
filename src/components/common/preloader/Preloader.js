import s from './Preloader.module.css'

let Preloader = (props) => {
	return (
		<div >
			<img className={s.preloader} src='https://i.pinimg.com/originals/a4/2b/9b/a42b9b720c210efc4cfbb25d73e0a78a.gif' />
		</div>
	)
}

export default Preloader;