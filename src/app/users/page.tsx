
import EmptyState from '../components/EmptyState';

const Users = () => {
    // const router = useRouter();

    // const handleLogout = () => {
    //   signOut({ redirect: false }) // prevent automatic redirection
    //     .then(() => {
    //       router.push('/');
    //       toast.success("Logout success!") // manually redirect to the homepage
    //     });
        
    // };
  
    return (
      <div className='hidden lg:block lg:pl-80 h-screen'>
        <EmptyState/>
      </div>
    );
}

export default Users