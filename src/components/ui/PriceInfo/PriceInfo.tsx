import { FC, PropsWithChildren, ReactNode } from "react";


interface priceInfoProps {
  children: ReactNode,
  _class?: string
}

const priceInfo: FC<PropsWithChildren<priceInfoProps>> = ({children, _class}) => {
    return (
      <span className={_class}>{children} ₽</span>
    )
}
export default priceInfo