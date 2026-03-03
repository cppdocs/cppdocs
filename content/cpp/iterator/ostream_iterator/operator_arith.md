---
title: "std::ostream_iterator<T,CharT,Traits>::operator++"
source_path: "cpp/iterator/ostream_iterator/operator"
category: "iterator"
---

Does nothing. These operator overloads are provided to satisfy the requirements of [LegacyOutputIterator](/cpp/named_req/outputiterator/). They make it possible for the expressions *iter++=value and *++iter=value to be used to output (insert) a value into the underlying stream.

## Declarations
```cpp
ostream_iterator& operator++();
```

```cpp
ostream_iterator& operator++( int );
```

## Return value
*this
