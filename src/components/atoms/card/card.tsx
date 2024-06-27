import clsx from "clsx";
import styles from "./card.module.scss";

type DivProps = JSX.IntrinsicElements["div"];
interface WhsCardProps extends DivProps {
  height?: string;
  img?: string;
}

const Card = ({ height, className, children, ...props }: WhsCardProps) => {
  const rootClasses = clsx(styles.root, className);

  return (
    <div style={{ height }} className={rootClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
