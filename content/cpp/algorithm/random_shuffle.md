---
title: "std::random_shuffle, std::shuffle"
source_path: "cpp/algorithm/random_shuffle"
header: "<algorithm>"
category: "algorithm"
since: "C++11"
---

Reorders the elements in the given range [first,last) such that each possible permutation of those elements has equal probability of appearance.

## Declarations
```cpp
template< class RandomIt >
void random_shuffle( RandomIt first, RandomIt last );
```
_(deprecated in C++14) (removed in C++17)_

```cpp
template< class RandomIt, class RandomFunc >
void random_shuffle( RandomIt first, RandomIt last, RandomFunc& r );
```
_(until C++11)_

```cpp
template< class RandomIt, class RandomFunc >
void random_shuffle( RandomIt first, RandomIt last, RandomFunc&& r );
```
_(since C++11) (deprecated in C++14) (removed in C++17)_

```cpp
template< class RandomIt, class URBG >
void shuffle( RandomIt first, RandomIt last, URBG&& g );
```
_(since C++11)_

## Parameters
- `first, last`: the range of elements to shuffle randomly
- `r`: function object returning a randomly chosen value
- `g`: generator object returning a randomly chosen value

## Notes
Note that the implementation is not dictated by the standard, so even if you use exactly the same RandomFunc or URBG (Uniform Random Number Generator) you may get different results with different standard library implementations.

The reason for removing std::random_shuffle in C++17 is that the iterator-only version usually depends on [std::rand](/cpp/numeric/random/rand/), which is now also discussed for deprecation. ([std::rand](/cpp/numeric/random/rand/) should be replaced with the classes of the [<random>](/cpp/header/random/) header, as [std::rand](/cpp/numeric/random/rand/) is considered harmful.) In addition, the iterator-only std::random_shuffle version usually depends on a global state. The std::shuffle's shuffle algorithm is the preferred replacement, as it uses a URBG as its 3rd parameter.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <random>
#include <vector>
 
int main()
{
    std::vector<int> v{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
 
    std::random_device rd;
    std::mt19937 g(rd());
 
    std::shuffle(v.begin(), v.end(), g);
 
    std::copy(v.begin(), v.end(), std::ostream_iterator<int>(std::cout, " "));
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 395 | C++98 | the source of randomness of overload (1) was not specified, andstd::rand could not be the source due to the C library requirement | it is implementation-defined,and using std::rand is allowed |
| LWG 552(N2423) | C++98 | r was not required to be the sourceof randomness of overload (2)[1] | required |

## See also
- [next_permutation](/cpp/algorithm/next_permutation/)
- [prev_permutation](/cpp/algorithm/prev_permutation/)
- [ranges::shuffle](/cpp/algorithm/ranges/shuffle/)
