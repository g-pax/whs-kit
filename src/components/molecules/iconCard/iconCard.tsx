import { PropsWithChildren, ReactNode } from "react";
import styles from "./iconCard.module.scss";
import Card from "../../atoms/card/card";
import Typography from "../../atoms/typography/typography";
import clsx from "clsx";

type IconType = "squared" | "rounded" | "circular" | "base";
type Spacing = "tight" | "loose";

interface WhsIconCardProps {
  iconType: IconType;
  icon: ReactNode;
  title: string;
  description: string;
  footerText?: string;
  spacing?: Spacing;
}

interface Container extends PropsWithChildren {
  type: IconType;
}
const Container = ({ type, children }: Container) => {
  return <div className={styles[type]}>{children}</div>;
};

const IconCard = ({
  description,
  icon: IconComponent,
  iconType,
  title,
  footerText,
  spacing = "tight",
}: WhsIconCardProps) => {
  return (
    <Card className={styles.root}>
      {iconType !== "base" ? (
        <Container type={iconType}>{IconComponent}</Container>
      ) : (
        IconComponent
      )}
      <div className={clsx(styles.content, styles[spacing])}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body2">{footerText}</Typography>
      </div>
    </Card>
  );
};

export default IconCard;
