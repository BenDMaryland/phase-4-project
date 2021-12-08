import { useEffect, useState } from "react";

function useValidate(userId) {
  const [status, setStatus] = useState('idle');
  const [username, setUsername] = useState('');
  

  useEffect(() => {
    setStatus('pending');
    if (userId === null ) {
      setStatus('rejected');
    } else {
      fetch(`/users/${userId}`)
        .then(resp => resp.json())
        .then(data => {
          if (data.success) {
            setStatus('success');
            setUsername(data.name);
          } else {
            setStatus('rejected');
          }
        })
        .catch(err => {
          console.error(err);
          setStatus('rejected');
        })
    }
  }, [userId]);

  return {status, username};
}

export default useValidate;