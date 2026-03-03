---
title: "std::ostreambuf_iterator<CharT,Traits>::operator++"
source_path: "cpp/iterator/ostreambuf_iterator/operator"
category: "iterator"
---

Does nothing. These operator overloads are provided to satisfy the requirements of [LegacyOutputIterator](/cpp/named_req/outputiterator/). They make it possible for the expressions *iter++=value and *++iter=value to be used to output (insert) a value into the underlying stream.

## Declarations
```cpp
ostreambuf_iterator& operator++();
```

```cpp
ostreambuf_iterator& operator++( int );
```

## Return value
*this
