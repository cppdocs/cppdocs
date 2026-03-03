---
title: "std::type_info::~type_info"
source_path: "cpp/types/type_info/~type_info"
category: "types"
---

Destructs an object of type [std::type_info](/cpp/types/type_info/). This destructor is public virtual, making the [std::type_info](/cpp/types/type_info/) a polymorphic class.

## Declarations
```cpp
virtual ~type_info();
```

## Notes
The dynamic type of a [std::type_info](/cpp/types/type_info/) subobject may be examined by the [typeid](/cpp/language/typeid/) operator.

It is unspecified whether the implementation calls this destructor for any [std::type_info](/cpp/types/type_info/) object at the end of the program.
