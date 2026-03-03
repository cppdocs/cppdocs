---
title: "std::forward_list<T,Allocator>::emplace_after"
source_path: "cpp/container/forward_list/emplace_after"
category: "container"
since: "C++11"
---

Inserts a new element into a position after the specified position in the container. The element is constructed in-place, i.e. no copy or move operations are performed. The constructor of the element is called with exactly the same arguments, as supplied to the function.

## Declarations
```cpp
template< class... Args >
iterator emplace_after( const_iterator pos, Args&&... args );
```
_(since C++11)_

## Parameters
- `pos`: iterator after which the new element will be constructed
- `args`: arguments to forward to the constructor of the element

## Return value
Iterator to the new element.

## Example
```cpp
#include <forward_list>
#include <iostream>
#include <string>
 
struct Sum
{
    std::string remark;
    int sum;
 
    Sum(std::string remark, int sum)
        : remark{std::move(remark)}, sum{sum} {}
 
    void print() const
    {
        std::cout << remark << " = " << sum << '\n';
    }
};
 
int main()
{
    std::forward_list<Sum> list;
 
    auto iter = list.before_begin();
    std::string str{"1"};
 
    for (int i{1}, sum{1}; i != 10; sum += i)
    {
        iter = list.emplace_after(iter, str, sum);
        ++i;
        str += " + " + std::to_string(i);
    }
 
    for (const Sum& s : list)
        s.print();
}
```

## See also
- [insert_after](/cpp/container/forward_list/insert_after/)
