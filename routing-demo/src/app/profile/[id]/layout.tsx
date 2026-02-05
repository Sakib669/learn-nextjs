type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div>
      featured profiles from layout page
      {children}
      this is after the children
    </div>
  );
};

export default layout;
