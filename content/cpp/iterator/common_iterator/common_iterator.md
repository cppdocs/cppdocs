---
title: "std::common_iterator<I,S>::common_iterator"
source_path: "cpp/iterator/common_iterator/common_iterator"
category: "iterator"
since: "C++20"
---

Constructs a new iterator adaptor, effectively initializes the underlying [std::variant](/cpp/utility/variant/)<I, S> member object var to hold an I (iterator) or S (sentinel) object.

## Declarations
```cpp
constexpr common_iterator() requires std::default_initializable<I> = default;
```
_(since C++20)_

```cpp
constexpr common_iterator( I i );
```
_(since C++20)_

```cpp
constexpr common_iterator( S s );
```
_(since C++20)_

```cpp
template< class I2, class S2 >
requires std::convertible_to<const I2&, I> &&
std::convertible_to<const S2&, S>
constexpr common_iterator( const common_iterator<I2, S2>& x );
```
_(since C++20)_

## Parameters
- `i`: iterator to adapt
- `s`: sentinel to adapt
- `x`: iterator adaptor to copy

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <numeric>
#include <vector>
 
int main()
{
    std::vector v{3, 1, 4, 1, 5, 9, 2};
 
    using CI = std::common_iterator<
                   std::counted_iterator<std::vector<int>::iterator>,
                   std::default_sentinel_t>;
    CI unused; // (1)
    CI start{std::counted_iterator{std::next(begin(v)), ssize(v) - 2}}; // (2)
    CI finish{std::default_sentinel}; // (3)
    CI first{start}; // (4)
    CI last{finish}; // (4)
 
    std::copy(first, last, std::ostream_iterator<int>{std::cout, " "});
    std::cout << '\n';
 
    std::common_iterator<
        std::counted_iterator<
            std::ostream_iterator<double>>,
            std::default_sentinel_t>
            beg{std::counted_iterator{std::ostream_iterator<double>{std::cout,";  "}, 5}},
            end{std::default_sentinel};
    std::iota(beg, end, 3.1);
    std::cout << '\n';
}
```

## See also
- [operator=](/cpp/iterator/common_iterator/operator/)
