export type NotificationProps = {
  message: string;
  type?: "alert" | "error" | "info" | "success";
};

export type NotificationComponentProps = NotificationProps & {
  onClose?: () => void;
};
