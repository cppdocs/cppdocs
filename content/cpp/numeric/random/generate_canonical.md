---
title: "std::generate_canonical"
source_path: "cpp/numeric/random/generate_canonical"
header: "<random>"
category: "numeric"
since: "C++11"
---

Generates a random floating point number in range [0,1).

## Declarations
```cpp
template< class RealType, std::size_t Bits, class Generator >
RealType generate_canonical( Generator& g );
```
_(since C++11)_

## Parameters
- `g`: generator to use to acquire entropy

## Return value
Floating point value in range [0,1).

## Notes
Some existing implementations have a bug where they may occasionally return 1.0 if RealType is float [GCC #63176](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=63176) [LLVM #18767](https://bugs.llvm.org/show_bug.cgi?id=18767) [MSVC STL #1074](https://github.com/microsoft/STL/issues/1074). This is [LWG issue 2524](https://cplusplus.github.io/LWG/issue2524).

## Example
```cpp
#include <iostream>
#include <random>
 
int main()
{
    std::random_device rd;
    std::mt19937 gen(rd());
    for (int n = 0; n < 10; ++n)
        std::cout << std::generate_canonical<double, 10>(gen) << ' ';
    std::cout << '\n';
}
```

## See also
- [uniform_real_distribution](/cpp/numeric/random/uniform_real_distribution/)
