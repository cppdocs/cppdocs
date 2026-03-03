---
title: "std::basic_streambuf<CharT,Traits>::pbase, std::basic_streambuf<CharT,Traits>::pptr, std::basic_streambuf<CharT,Traits>::epptr"
source_path: "cpp/io/basic_streambuf/pptr"
category: "io"
---

Returns pointers defining the put area.

## Declarations
```cpp
protected:
char_type* pbase() const;
```

```cpp
protected:
char_type* pptr() const;
```

```cpp
protected:
char_type* epptr() const;
```

## Return value
1) The pointer to the beginning of the put area.

## Example
This section is incompleteReason: no example

## See also
- [ebackgptregptr](/cpp/io/basic_streambuf/gptr/)
