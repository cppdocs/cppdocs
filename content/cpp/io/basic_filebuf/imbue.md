---
title: "std::basic_filebuf<CharT,Traits>::imbue"
source_path: "cpp/io/basic_filebuf/imbue"
category: "io"
---

Changes the associated locale so that all characters inserted or extracted after this call (and until another call to imbue()) are converted using the [std::codecvt](/cpp/locale/codecvt/) facet of loc.

## Declarations
```cpp
protected:
virtual void imbue( const std::locale& loc )
```

## Parameters
- `loc`: the locale to imbue the stream with

## Return value
(none)

## Example
This section is incompleteReason: no example

## See also
- [imbue](/cpp/io/basic_streambuf/pubimbue/)
- [imbue](/cpp/io/basic_ios/imbue/)
