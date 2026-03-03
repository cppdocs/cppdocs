---
title: "std::ostreambuf_iterator<CharT,Traits>::operator="
source_path: "cpp/iterator/ostreambuf_iterator/operator"
category: "iterator"
---

If failed() returns false, inserts the character c into the associated stream buffer by calling pbuf->sputc(c), where pbuf is the private member of type streambuf_type*. Otherwise, does nothing.

## Declarations
```cpp
ostreambuf_iterator& operator=( CharT c );
```

## Parameters
- `c`: the character to insert

## Return value
*this

## Example
This section is incompleteReason: no example

## See also
- [sputc](/cpp/io/basic_streambuf/sputc/)
