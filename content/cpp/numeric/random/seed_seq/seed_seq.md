---
title: "std::seed_seq::seed_seq"
source_path: "cpp/numeric/random/seed_seq/seed_seq"
category: "numeric"
since: "C++11"
---

1) The default constructor. After construction, [v](/cpp/numeric/random/seed_seq/#v) is empty.

## Declarations
```cpp
seed_seq() noexcept;
```
_(since C++11)_

```cpp
seed_seq( const seed_seq& ) = delete;
```
_(since C++11)_

```cpp
template< class InputIt >
seed_seq( InputIt begin, InputIt end );
```
_(since C++11)_

```cpp
template< class T >
seed_seq( std::initializer_list<T> il );
```
_(since C++11)_

## Parameters
- `begin, end`: the pair of iterators denoting the initial seed sequence
- `il`: the initial seed sequence

## Example
```cpp
#include <iterator>
#include <random>
#include <sstream>
 
int main()
{
    std::seed_seq s1; // default-constructible
    std::seed_seq s2{1, 2, 3}; // can use list-initialization
    std::seed_seq s3 = {-1, 0, 1}; // another form of list-initialization
    int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    std::seed_seq s4(a, a + 10); // can use iterators
    std::istringstream buf("1 2 3 4 5"); 
    std::istream_iterator<int> beg(buf), end;
    std::seed_seq s5(beg, end); // even stream input iterators
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2180 | C++11 | all constructors were non-throwing | only overload (1) is non-throwing |
| LWG 3422 | C++11 | 1. overload (1) was not noexcept2. overload (4) was not constrainted | 1.made noexcept2. constrained |
