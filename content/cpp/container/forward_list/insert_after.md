---
title: "std::forward_list<T,Allocator>::insert_after"
source_path: "cpp/container/forward_list/insert_after"
category: "container"
since: "C++11"
---

Inserts elements after the specified position in the container.

## Declarations
```cpp
iterator insert_after( const_iterator pos, const T& value );
```
_(since C++11)_

```cpp
iterator insert_after( const_iterator pos, T&& value );
```
_(since C++11)_

```cpp
iterator insert_after( const_iterator pos, size_type count, const T& value );
```
_(since C++11)_

```cpp
template< class InputIt >
iterator insert_after( const_iterator pos, InputIt first, InputIt last );
```
_(since C++11)_

```cpp
iterator insert_after( const_iterator pos, std::initializer_list<T> ilist );
```
_(since C++11)_

## Parameters
- `pos`: iterator after which the content will be inserted
- `value`: element value to insert
- `count`: number of copies to insert
- `first, last`: the range of elements to insert
- `ilist`: initializer list to insert the values from

## Example
```cpp
#include <forward_list>
#include <iostream>
#include <string>
#include <vector>
 
void print(const std::forward_list<int>& list)
{
    std::cout << "list: {";
    for (char comma[3] = {'\0', ' ', '\0'}; int i : list)
    {
        std::cout << comma << i;
        comma[0] = ',';
    }
    std::cout << "}\n";
}
 
int main()
{
    std::forward_list<int> ints{1, 2, 3, 4, 5};
    print(ints);
 
    // insert_after (2)
    auto beginIt = ints.begin();
    ints.insert_after(beginIt, -6);
    print(ints);
 
    // insert_after (3)
    auto anotherIt = beginIt;
    ++anotherIt;
    anotherIt = ints.insert_after(anotherIt, 2, -7);
    print(ints);
 
    // insert_after (4)
    const std::vector<int> v = {-8, -9, -10};
    anotherIt = ints.insert_after(anotherIt, v.cbegin(), v.cend());
    print(ints);
 
    // insert_after (5)
    ints.insert_after(anotherIt, {-11, -12, -13, -14});
    print(ints);
}
```

## See also
- [emplace_after](/cpp/container/forward_list/emplace_after/)
- [push_front](/cpp/container/forward_list/push_front/)
