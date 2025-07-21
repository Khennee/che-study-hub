export interface ToastProps {
  message: string;
  type?: "login" | "logout" | "success" | "error";
  onClose: () => void;
  duration?: number;
}