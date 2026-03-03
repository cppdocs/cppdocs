---
title: "std::assume_aligned"
source_path: "cpp/memory/assume_aligned"
header: "<memory>"
category: "memory"
since: "C++20"
---

Informs the implementation that the object ptr points to is aligned to at least N. The implementation may use this information to generate more efficient code, but it might only make this assumption if the object is accessed via the return value of assume_aligned.

## Declarations
```cpp
template< std::size_t N, class T >
constexpr T* assume_aligned( T* ptr );
```
_(since C++20)_

## Return value
ptr.

## Notes
To ensure that the program benefits from the optimizations enabled by assume_aligned, it is important to access the object via its return value:

It is up to the program to ensure that the alignment assumption actually holds. A call to assume_aligned does not cause the compiler to verify or enforce this.

## Example
This section is incompleteReason: no example

## See also
- [alignof](/cpp/language/alignof/)
- [alignas](/cpp/language/alignas/)
- [aligned_storage](/cpp/types/aligned_storage/)
- [align](/cpp/memory/align/)
- [assume](/cpp/language/attributes/assume/)
