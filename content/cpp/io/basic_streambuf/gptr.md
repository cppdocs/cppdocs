---
title: "std::basic_streambuf<CharT,Traits>::eback, gptr, egptr"
source_path: "cpp/io/basic_streambuf/gptr"
category: "io"
---

Returns pointers defining the get area.

## Declarations
```cpp
char_type* eback() const;
```

```cpp
char_type* gptr() const;
```

```cpp
char_type* egptr() const;
```

## Return value
1) The pointer to the beginning of the get area.

## Notes
While the names "gptr" and "egptr" refer to the get area, the name "eback" refers to the end of the putback area: stepping backwards from gptr, characters can be put back until eback.

## Example
This section is incompleteReason: no example

## See also
- [pbasepptrepptr](/cpp/io/basic_streambuf/pptr/)
