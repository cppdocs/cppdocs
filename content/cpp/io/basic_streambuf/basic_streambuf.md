---
title: "std::basic_streambuf<CharT,Traits>::basic_streambuf"
source_path: "cpp/io/basic_streambuf/basic_streambuf"
category: "io"
since: "C++11"
---

1) Constructs the basic_streambuf object, initializes the six pointer members (eback(), gptr(), egptr(), pbase(), pptr(), and epptr()) to null pointer values, and the locale member to [std::locale](/cpp/locale/locale/)(), a copy of the global C++ locale at the time of construction.

## Declarations
```cpp
protected:
basic_streambuf();
```

```cpp
protected:
basic_streambuf(const basic_streambuf& rhs);
```
_(since C++11)_

## Parameters
- `rhs`: a streambuf object to copy

## Notes
Until C++11, it was unspecified whether basic_streambuf or any of its derived classes is [CopyConstructible](/cpp/named_req/copyconstructible/) ([LWG issue 421](https://cplusplus.github.io/LWG/issue421)), and different C++ library implementations provided different options.

## Example
This section is incompleteReason: no example

## See also
- [(constructor)](/cpp/io/basic_filebuf/basic_filebuf/)
- [(constructor)](/cpp/io/basic_stringbuf/basic_stringbuf/)
- [(constructor)](/cpp/io/strstreambuf/strstreambuf/)
