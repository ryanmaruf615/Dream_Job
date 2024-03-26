import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import React from 'react';

const SuccessMessage = ({ title }) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: title,
        showConfirmButton: false,
        timer: 1500
    })
};

export default SuccessMessage;
