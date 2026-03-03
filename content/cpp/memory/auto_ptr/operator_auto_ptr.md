---
title: "std::auto_ptr<T>::operator auto_ptr<Y>"
source_path: "cpp/memory/auto_ptr/operator"
category: "memory"
---

Converts *this to an auto_ptr for a different type Y.

## Declarations
```cpp
template< class Y >
operator auto_ptr_ref<Y>() throw();
```
_(deprecated in C++11) (removed in C++17)_

```cpp
template< class Y >
operator auto_ptr<Y>() throw();
```
_(deprecated in C++11) (removed in C++17)_

## Notes
The constructor and the copy assignment operator from auto_ptr_ref is provided to allow copy-constructing and assigning [std::auto_ptr](/cpp/memory/auto_ptr/) from nameless temporaries. Since its copy constructor and copy assignment operator take the argument as non-const reference, they cannot bind rvalue arguments directly. However, a user-defined conversion (1) or (2) can be executed (which releases the original auto_ptr), followed by a call to the constructor or copy-assignment operator that take auto_ptr_ref by value. This is an early implementation of [move semantics](/cpp/utility/move/).
