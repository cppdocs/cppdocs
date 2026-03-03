---
title: "std::type_index::name"
source_path: "cpp/types/type_index/name"
category: "types"
since: "C++11"
---

Returns the name of the associated [std::type_info](/cpp/types/type_info/) object. Equivalent to calling [std::type_info::name()](/cpp/types/type_info/name/) directly.

## Declarations
```cpp
const char* name() const noexcept;
```
_(since C++11)_

## Return value
The name of the associated [std::type_info](/cpp/types/type_info/) object.

## Example
```cpp
#include <iostream>
#include <typeindex>
int main() {
    std::cout << std::type_index(typeid(std::cout)).name();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2144 | C++11 | type_index::name was not required to be noexcept | required |
