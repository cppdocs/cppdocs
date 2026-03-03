---
title: "std::basic_stringbuf<CharT,Traits,Allocator>::init_buf_ptrs"
source_path: "cpp/io/basic_stringbuf/init_buf_ptrs"
category: "io"
---

Initializes the input and output sequences from buf according to mode. buf and mode are [exposition-only data members](/cpp/io/basic_stringbuf/#Exposition-only_members) of *this.

## Declarations
```cpp
void init_buf_ptrs();
```
_(exposition only*)_

## Notes
For efficiency reasons, stream buffer operations can violate invariants of buf while it is held encapsulated in the std::basic_stringbuf, e.g., by writing to characters in the range [buf.data() + buf.size(),buf.data() + buf.capacity()).

All operations retrieving a [std::basic_string](/cpp/string/basic_string/) from buf ensure that the [std::basic_string](/cpp/string/basic_string/) invariants hold on the returned value.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1448 | C++98 | calling init_buf_ptrs() madepptr() == pbase() + buf.data()for streams that are both input and output streams | makespptr() == pbase() + buf.size()for append streams |
