---
title: "std::vector<T,Allocator>::rbegin, std::vector<T,Allocator>::crbegin"
source_path: "cpp/container/vector/rbegin"
category: "container"
since: "C++11"
---

Returns a reverse iterator to the first element of the reversed vector. It corresponds to the last element of the non-reversed vector. If the vector is empty, the returned iterator is equal to [rend()](/cpp/container/vector/rend/).

## Declarations
```cpp
reverse_iterator rbegin();
```
_(noexcept since C++11)(constexpr since C++20)_

```cpp
const_reverse_iterator rbegin() const;
```
_(noexcept since C++11)(constexpr since C++20)_

```cpp
const_reverse_iterator crbegin() const noexcept;
```
_(since C++11) (constexpr since C++20)_

## Return value
Reverse iterator to the first element.

## Notes
The [underlying iterator](/cpp/iterator/reverse_iterator/base/) of the returned reverse iterator is the [end iterator](/cpp/container/vector/end/). Hence the returned iterator is invalidated if and when the end iterator is invalidated.

libc++ backports crbegin() to C++98 mode.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <string>
#include <vector>
 
int main()
{
    std::vector<int> nums{1, 2, 4, 8, 16};
    std::vector<std::string> fruits{"orange", "apple", "raspberry"};
    std::vector<char> empty;
 
    // Print vector.
    std::for_each(nums.rbegin(), nums.rend(), [](const int n) { std::cout << n << ' '; });
    std::cout << '\n';
 
    // Sums all integers in the vector nums (if any), printing only the result.
    std::cout << "Sum of nums: "
              << std::accumulate(nums.rbegin(), nums.rend(), 0) << '\n';
 
    // Prints the first fruit in the vector fruits, checking if there is any.
    if (!fruits.empty())
        std::cout << "First fruit: " << *fruits.rbegin() << '\n';
 
    if (empty.rbegin() == empty.rend())
        std::cout << "vector 'empty' is indeed empty.\n";
}
```

## See also
- [rendcrend](/cpp/container/vector/rend/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
