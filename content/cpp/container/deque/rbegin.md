---
title: "std::deque<T,Allocator>::rbegin, std::deque<T,Allocator>::crbegin"
source_path: "cpp/container/deque/rbegin"
category: "container"
since: "C++11"
---

Returns a reverse iterator to the first element of the reversed deque. It corresponds to the last element of the non-reversed deque. If the deque is empty, the returned iterator is equal to [rend()](/cpp/container/deque/rend/).

## Declarations
```cpp
reverse_iterator rbegin();
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator rbegin() const;
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator crbegin() const noexcept;
```
_(since C++11)_

## Return value
Reverse iterator to the first element.

## Notes
The [underlying iterator](/cpp/iterator/reverse_iterator/base/) of the returned reverse iterator is the [end iterator](/cpp/container/deque/end/). Hence the returned iterator is invalidated if and when the end iterator is invalidated.

libc++ backports crbegin() to C++98 mode.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <string>
#include <deque>
 
int main()
{
    std::deque<int> nums{1, 2, 4, 8, 16};
    std::deque<std::string> fruits{"orange", "apple", "raspberry"};
    std::deque<char> empty;
 
    // Print deque.
    std::for_each(nums.rbegin(), nums.rend(), [](const int n) { std::cout << n << ' '; });
    std::cout << '\n';
 
    // Sums all integers in the deque nums (if any), printing only the result.
    std::cout << "Sum of nums: "
              << std::accumulate(nums.rbegin(), nums.rend(), 0) << '\n';
 
    // Prints the first fruit in the deque fruits, checking if there is any.
    if (!fruits.empty())
        std::cout << "First fruit: " << *fruits.rbegin() << '\n';
 
    if (empty.rbegin() == empty.rend())
        std::cout << "deque 'empty' is indeed empty.\n";
}
```

## See also
- [rendcrend](/cpp/container/deque/rend/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
