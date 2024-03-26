import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const ErrorMessage = () => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
    });
}
    export default ErrorMessage;
