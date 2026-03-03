---
title: "std::ostream_iterator<T,CharT,Traits>::operator="
source_path: "cpp/iterator/ostream_iterator/operator"
category: "iterator"
---

1) Copy assignment operator. Assigns the contents of other

## Declarations
```cpp
ostream_iterator& operator=( const ostream_iterator& );
```

```cpp
ostream_iterator& operator=( const T& value );
```

## Parameters
- `value`: the object to insert

## Return value
*this

## Notes
T can be any class with a user-defined operator<<.

Prior to C++20, the existence of the copy assignment operator relied on the [deprecated implicit generation](/cpp/language/as_operator/#Implicitly-defined_copy_assignment_operator).

## Example
```cpp
#include <iostream>
#include <iterator>
 
int main()
{
    std::ostream_iterator<int> i1(std::cout, ", ");
    *i1++ = 1; // usual form, used by standard algorithms
    *++i1 = 2;
    i1 = 3; // neither * nor ++ are necessary
    std::ostream_iterator<double> i2(std::cout);
    i2 = 3.14;
    std::cout << '\n';
}
```
