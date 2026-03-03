---
title: "std::experimental::shuffle"
source_path: "cpp/experimental/shuffle"
header: "<experimental/algorithm>"
category: "experimental"
---

Reorders the elements in the given range [first,last) such that each possible permutation of those elements has equal probability of appearance, using the [per-thread random number engine](/cpp/experimental/lib_extensions_2/#per-thread_engine) as the random number generator.

## Declarations
```cpp
template< class RandomIt >
void shuffle( RandomIt first, RandomIt last );
```
_(library fundamentals TS v2)_

## Parameters
- `first, last`: the range of elements to shuffle randomly

## Return value
(none)

## Example
```cpp
#include <experimental/algorithm>
#include <iostream>
#include <string>
 
int main()
{
    std::string sample{"ABCDEF"};
 
    for (int i = 0; i != 4; ++i)
    {
        std::experimental::shuffle(sample.begin(), sample.end());
        std::cout << sample << '\n';
    }
}
```

## See also
- [random_shuffleshuffle](/cpp/algorithm/random_shuffle/)
