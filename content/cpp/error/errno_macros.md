---
title: "Error numbers"
source_path: "cpp/error/errno_macros"
category: "error"
---

Each of the macros defined in [<cerrno>](/cpp/header/cerrno/) expands to integer constant expressions with type int, each with a positive value, matching most of the [POSIX error codes](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/errno.h.html). The following constants are defined (the implementation may define more, as long as they begin with 'E' followed by digits or uppercase letters).

## Example
```cpp
#include <cerrno>
#include <cstring>
#include <iomanip>
#include <iostream>
 
#define SHOW(x) std::cout << std::setw(15) << #x << ": " << std::strerror(x) << '\n'
 
int main()
{
    std::cout << "Known error codes/messages:\n\n";
 
    SHOW( E2BIG );
    SHOW( EACCES );
    SHOW( EADDRINUSE );
    SHOW( EADDRNOTAVAIL );
    SHOW( EAFNOSUPPORT );
    SHOW( EAGAIN );
    SHOW( EALREADY );
    SHOW( EBADF );
    SHOW( EBADMSG );
    SHOW( EBUSY );
    SHOW( ECANCELED );
    SHOW( ECHILD );
    SHOW( ECONNABORTED );
    SHOW( ECONNREFUSED );
    SHOW( ECONNRESET );
    SHOW( EDEADLK );
    SHOW( EDESTADDRREQ );
    SHOW( EDOM );
    SHOW( EEXIST );
    SHOW( EFAULT );
    SHOW( EFBIG );
    SHOW( EHOSTUNREACH );
    SHOW( EIDRM );
    SHOW( EILSEQ );
    SHOW( EINPROGRESS );
    SHOW( EINTR );
    SHOW( EINVAL );
    SHOW( EIO );
    SHOW( EISCONN );
    SHOW( EISDIR );
    SHOW( ELOOP );
    SHOW( EMFILE );
    SHOW( EMLINK );
    SHOW( EMSGSIZE );
    SHOW( ENAMETOOLONG );
    SHOW( ENETDOWN );
    SHOW( ENETRESET );
    SHOW( ENETUNREACH );
    SHOW( ENFILE );
    SHOW( ENOBUFS );
    SHOW( ENODATA );
    SHOW( ENODEV );
    SHOW( ENOENT );
    SHOW( ENOEXEC );
    SHOW( ENOLCK );
    SHOW( ENOLINK );
    SHOW( ENOMEM );
    SHOW( ENOMSG );
    SHOW( ENOPROTOOPT );
    SHOW( ENOSPC );
    SHOW( ENOSR );
    SHOW( ENOSTR );
    SHOW( ENOSYS );
    SHOW( ENOTCONN );
    SHOW( ENOTDIR );
    SHOW( ENOTEMPTY );
    SHOW( ENOTRECOVERABLE );
    SHOW( ENOTSOCK );
    SHOW( ENOTSUP );
    SHOW( ENOTTY );
    SHOW( ENXIO );
    SHOW( EOPNOTSUPP );
    SHOW( EOVERFLOW );
    SHOW( EOWNERDEAD );
    SHOW( EPERM );
    SHOW( EPIPE );
    SHOW( EPROTO );
    SHOW( EPROTONOSUPPORT );
    SHOW( EPROTOTYPE );
    SHOW( ERANGE );
    SHOW( EROFS );
    SHOW( ESPIPE );
    SHOW( ESRCH );
    SHOW( ETIME );
    SHOW( ETIMEDOUT );
    SHOW( ETXTBSY );
    SHOW( EWOULDBLOCK );
    SHOW( EXDEV );
}
```

## See also
- [errc](/cpp/error/errc/)
- [std::error_condition](/cpp/error/error_condition/)
- [<cerrno>](/cpp/header/cerrno/)
- [errno](/cpp/error/errno/)
- [perror](/cpp/io/c/perror/)
- [stderr](/cpp/io/c/std_streams/)
- [strerror](/cpp/string/byte/strerror/)
- [C documentation](/c/error/errno_macros/)
