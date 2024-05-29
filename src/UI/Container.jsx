import { clsx } from 'clsx';

function Container({className,children:any}) {
  return (
    <div className={clsx(`${className} mx-8`)}>{children}</div>
  )
}

export default Container