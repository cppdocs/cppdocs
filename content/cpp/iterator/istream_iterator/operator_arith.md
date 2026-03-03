---
title: "std::istream_iterator<T,CharT,Traits,Distance>::operator++, operator++(int)"
source_path: "cpp/iterator/istream_iterator/operator"
category: "iterator"
---

Reads a value from the underlying stream (using its [operator>>](/cpp/io/basic_istream/operator_gtgt/)) and stores it into the iterator object. If the read fails (the underlying stream's [fail()](/cpp/io/basic_ios/fail/) returns true), the iterator becomes the end-of-stream iterator.

## Declarations
```cpp
istream_iterator& operator++();
```

```cpp
istream_iterator operator++( int );
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 260 | C++98 | the return type of operator++(int) was istream_iterator& | corrected to istream_iterator |
| LWG 788 | C++98 | the underlying stream's operator void* wasused to determine whether the read fails, but itwas removed by the resolution of LWG issue 468 | uses fail() instead |
| LWG 838 | C++98 | it was unclear whether end-of-stream iterators can be incremented | the behavior is undefined |
