---
title: "std::enable_shared_from_this<T>::operator="
source_path: "cpp/memory/enable_shared_from_this/operator"
category: "memory"
since: "C++11"
---

Does nothing; returns *this.

## Declarations
```cpp
enable_shared_from_this& operator=( const enable_shared_from_this &rhs ) noexcept;
```
_(since C++11)_

## Parameters
- `rhs`: another enable_shared_from_this to assign to *this

## Return value
*this

## Notes
[weak_this](/cpp/memory/enable_shared_from_this/#weak_this) is not affected by the assignment.

## Example
```cpp
#include <iostream>
#include <memory>
 
class SharedInt : public std::enable_shared_from_this<SharedInt>
{
public:
    explicit SharedInt(int n) : mNumber(n) {}
    SharedInt(const SharedInt&) = default;
    SharedInt(SharedInt&&) = default;
    ~SharedInt() = default;
 
    // Both assignment operators use enable_shared_from_this::operator=
    SharedInt& operator=(const SharedInt&) = default;
    SharedInt& operator=(SharedInt&&) = default;
 
    int number() const { return mNumber; }
 
private:
    int mNumber;
};
 
int main()
{
    std::shared_ptr<SharedInt> a = std::make_shared<SharedInt>(2);
    std::shared_ptr<SharedInt> b = std::make_shared<SharedInt>(4);
    *a = *b;
 
    std::cout << a->number() << '\n';
}
```

## See also
- [shared_ptr](/cpp/memory/shared_ptr/)
