---
title: "std::flat_set<Key,Compare,KeyContainer>::contains"
source_path: "cpp/container/flat_set/contains"
category: "container"
since: "C++23"
---

1) Checks if there is an element with key equivalent to key in the container.

## Declarations
```cpp
bool contains( const Key& key ) const;
```
_(since C++23)_

```cpp
template< class K >
bool contains( const K& x ) const;
```
_(since C++23)_

## Parameters
- `key`: key value of the element to search for
- `x`: a value of any type that can be transparently compared with a key

## Return value
true if there is such an element, otherwise false.

## Example
```cpp
#include <iostream>
#include <flat_set>
 
int main()
{
    std::flat_set<int> example{1, 2, 3, 4};
 
    for (int x : {2, 5})
        if (example.contains(x))
            std::cout << x << ": Found\n";
        else
            std::cout << x << ": Not found\n";
}
```

## See also
- [find](/cpp/container/flat_set/find/)
- [count](/cpp/container/flat_set/count/)
- [equal_range](/cpp/container/flat_set/equal_range/)
