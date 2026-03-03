---
title: "std::is_sufficiently_aligned"
source_path: "cpp/memory/is_sufficiently_aligned"
header: "<memory>"
category: "memory"
since: "C++26"
---

Checks whether the pointer ptr points to an object whose alignment has a value of at least N.

## Declarations
```cpp
template< std::size_t N, class T >
bool is_sufficiently_aligned( T* ptr );
```
_(since C++26)_

## Return value
true if ptr points to an object that has alignment at least N; otherwise false.

## Notes
std::is_sufficiently_aligned can be used as a precondition to [std::assume_aligned](/cpp/memory/assume_aligned/).

## Example
This section is incompleteReason: no example

## See also
- [alignof](/cpp/language/alignof/)
- [alignas](/cpp/language/alignas/)
- [aligned_storage](/cpp/types/aligned_storage/)
- [align](/cpp/memory/align/)
