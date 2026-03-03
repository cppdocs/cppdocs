---
title: "std::max_align_t"
source_path: "cpp/types/max_align_t"
header: "<cstddef>"
category: "types"
since: "C++11"
---

std::max_align_t is a [standard-layout](/cpp/named_req/standardlayouttype/) [TrivialType](/cpp/named_req/trivialtype/)(until C++26)[TriviallyCopyable](/cpp/named_req/triviallycopyable/) type(since C++26) whose [alignment requirement](/cpp/language/objects/#Alignment) is at least as strict (as large) as that of every scalar type.

## Declarations
```cpp
typedef /* implementation-defined */ max_align_t;
```
_(since C++11)_

## Notes
Pointers returned by allocation functions such as [std::malloc](/cpp/memory/c/malloc/) are suitably aligned for any object, which means they are aligned at least as strictly as std::max_align_t.

## Example
```cpp
#include <cstddef>
#include <iostream>
 
int main()
{
    std::cout << alignof(std::max_align_t) << '\n';
}
```

## See also
- [alignof](/cpp/language/alignof/)
- [alignment_of](/cpp/types/alignment_of/)
- [is_scalar](/cpp/types/is_scalar/)
- [C documentation](/c/types/max_align_t/)
