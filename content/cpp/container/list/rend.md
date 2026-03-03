---
title: "std::list<T,Allocator>::rend, std::list<T,Allocator>::crend"
source_path: "cpp/container/list/rend"
category: "container"
since: "C++11"
---

Returns a reverse iterator to the element following the last element of the reversed list. It corresponds to the element preceding the first element of the non-reversed list. This element acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
reverse_iterator rend();
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator rend() const;
```
_(noexcept since C++11)_

```cpp
const_reverse_iterator crend() const noexcept;
```
_(since C++11)_

## Return value
Reverse iterator to the element following the last element.

## Notes
libc++ backports crend() to C++98 mode.

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
- [rbegincrbegin](/cpp/container/list/rbegin/)
- [rendcrend](/cpp/iterator/rend/)
