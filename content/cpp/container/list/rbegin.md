---
title: "std::list<T,Allocator>::rbegin, std::list<T,Allocator>::crbegin"
source_path: "cpp/container/list/rbegin"
category: "container"
since: "C++11"
---

Returns a reverse iterator to the first element of the reversed list. It corresponds to the last element of the non-reversed list. If the list is empty, the returned iterator is equal to [rend()](/cpp/container/list/rend/).

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
The [underlying iterator](/cpp/iterator/reverse_iterator/base/) of the returned reverse iterator is the [end iterator](/cpp/container/list/end/). Hence the returned iterator is invalidated if and when the end iterator is invalidated.

libc++ backports crbegin() to C++98 mode.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <string>
#include <list>
 
int main()
{
    std::list<int> nums{1, 2, 4, 8, 16};
    std::list<std::string> fruits{"orange", "apple", "raspberry"};
    std::list<char> empty;
 
    // Print list.
    std::for_each(nums.rbegin(), nums.rend(), [](const int n) { std::cout << n << ' '; });
    std::cout << '\n';
 
    // Sums all integers in the list nums (if any), printing only the result.
    std::cout << "Sum of nums: "
              << std::accumulate(nums.rbegin(), nums.rend(), 0) << '\n';
 
    // Prints the first fruit in the list fruits, checking if there is any.
    if (!fruits.empty())
        std::cout << "First fruit: " << *fruits.rbegin() << '\n';
 
    if (empty.rbegin() == empty.rend())
        std::cout << "list 'empty' is indeed empty.\n";
}
```

## See also
- [rendcrend](/cpp/container/list/rend/)
- [rbegincrbegin](/cpp/iterator/rbegin/)
