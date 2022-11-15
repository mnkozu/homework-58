import React from 'react';

interface Props extends React.PropsWithChildren {
  type: string,
  show?: boolean,
  onCancel?: () => void;
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({type,show,onCancel ,onDismiss,children}) => {
  return (
    <div
      className={`alert alert-${type} d-flex justify-content-between`}
      style={{display: show ? 'block' : 'none'}}
    >
      {children}
      {onDismiss &&
         <button
            type="button"
            onClick={onCancel}
            className="btn-close"
         />}
    </div>
  );
};

export default Alert;