---
title: "std::bit_not"
source_path: "cpp/utility/functional/bit_not"
header: "<functional>"
category: "utility"
since: "C++14"
---

Function object for performing bitwise NOT. Effectively calls operator~ on type T.

## Declarations
```cpp
template< class T = void >
struct bit_not;
```
_(since C++14)_

## Parameters
- `arg`: value to compute bitwise NOT of

## Return value
The result of ~arg.

## Notes
Although std::bit_not is added via post-C++11 proposal [N3421](https://wg21.link/N3421), it is treated as a part of the resolution for [LWG issue 660](https://cplusplus.github.io/LWG/issue660) (except for its transparent specialization [std::bit_not<>](/cpp/utility/functional/bit_not_void/)) by common implementations, and thus available in their C++98/03 mode.
