---
title: "std::list<T,Allocator>::splice"
source_path: "cpp/container/list/splice"
category: "container"
since: "C++11"
---

Transfers elements from one list to another.

## Declarations
```cpp
void splice( const_iterator pos, list& other );
```

```cpp
void splice( const_iterator pos, list&& other );
```
_(since C++11)_

```cpp
void splice( const_iterator pos, list& other, const_iterator it );
```

```cpp
void splice( const_iterator pos, list&& other, const_iterator it );
```
_(since C++11)_

```cpp
void splice( const_iterator pos, list& other,
const_iterator first, const_iterator last);
```

```cpp
void splice( const_iterator pos, list&& other,
const_iterator first, const_iterator last );
```
_(since C++11)_

## Parameters
- `pos`: element before which the content will be inserted
- `other`: another container to transfer the content from
- `it`: the element to transfer from other to *this
- `first, last`: the range of elements to transfer from other to *this

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <list>
 
std::ostream& operator<<(std::ostream& ostr, const std::list<int>& list)
{
    for (auto& i : list)
        ostr << ' ' << i;
 
    return ostr;
}
 
int main ()
{
    std::list<int> list1{1, 2, 3, 4, 5};
    std::list<int> list2{10, 20, 30, 40, 50};
 
    auto it = list1.begin();
    std::advance(it, 2);
 
    list1.splice(it, list2);
 
    std::cout << "list1:" << list1 << '\n';
    std::cout << "list2:" << list2 << '\n';
 
    list2.splice(list2.begin(), list1, it, list1.end());
 
    std::cout << "list1:" << list1 << '\n';
    std::cout << "list2:" << list2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 250 | C++98 | references and iterators to the movedelement(s) were all invalidated | they refer or point to thesame element(s) in *this |
| N2525 | C++98 | O(1) splicing could not be guaranteed ifget_allocator() != other.get_allocator() | the behavior isundefined in this case |

## See also
- [merge](/cpp/container/list/merge/)
- [removeremove_if](/cpp/container/list/remove/)
