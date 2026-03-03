---
title: "std::make_from_tuple"
source_path: "cpp/utility/make_from_tuple"
header: "<tuple>"
category: "utility"
since: "C++23"
---

Construct an object of type T, using the elements of the tuple t as the arguments to the constructor.

## Declarations
```cpp
template< class T, class Tuple >
constexpr T make_from_tuple( Tuple&& t );
```
_(since C++17) (until C++23)_

```cpp
template< class T, tuple-like Tuple >
constexpr T make_from_tuple( Tuple&& t );
```
_(since C++23)_

## Parameters
- `t`: tuple whose elements to be used as arguments to the constructor of T

## Return value
The constructed T object or reference.

## Notes
Tuple need not be [std::tuple](/cpp/utility/tuple/), and instead may be anything that supports [std::get](/cpp/utility/tuple/get/) and [std::tuple_size](/cpp/utility/tuple_size/); in particular, [std::array](/cpp/container/array/) and [std::pair](/cpp/utility/pair/) may be used.

Tuple is constrained to be tuple-like, i.e. each type therein is required to be a specialization of [std::tuple](/cpp/utility/tuple/) or another type (such as [std::array](/cpp/container/array/) and [std::pair](/cpp/utility/pair/)) that models [tuple-like](/cpp/utility/tuple/tuple-like/).

Due to [guaranteed copy elision](/cpp/language/copy_elision/), T need not be movable.

## Example
```cpp
#include <iostream>
#include <tuple>
 
struct Foo
{
    Foo(int first, float second, int third)
    {
        std::cout << first << ", " << second << ", " << third << '\n';
    }
};
 
int main()
{
    auto tuple = std::make_tuple(42, 3.14f, 0);
    std::make_from_tuple<Foo>(std::move(tuple));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3528 | C++17 | cast containing reinterpret_cast etc. was allowed in the case of 1-tuple | prohibited |

## See also
- [make_tuple](/cpp/utility/tuple/make_tuple/)
- [forward_as_tuple](/cpp/utility/tuple/forward_as_tuple/)
- [forwarding references](/cpp/language/reference/#Forwarding_references)
- [apply](/cpp/utility/apply/)
