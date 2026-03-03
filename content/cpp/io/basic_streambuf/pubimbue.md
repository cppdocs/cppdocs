---
title: "std::basic_streambuf<CharT,Traits>::pubimbue, std::basic_streambuf<CharT,Traits>::imbue"
source_path: "cpp/io/basic_streambuf/pubimbue"
category: "io"
---

Changes the associated locale.

## Declarations
```cpp
std::locale pubimbue( const std::locale& loc );
```

```cpp
protected:
virtual void imbue( const std::locale& loc );
```

## Parameters
- `loc`: locale object to associate

## Notes
From within the call of imbue(), [getloc()](/cpp/io/basic_streambuf/getloc/) returns the previous locale.

## Example
This section is incompleteReason: no example

## See also
- [getloc](/cpp/io/basic_streambuf/getloc/)
