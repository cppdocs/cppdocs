---
title: "std::hash<Key>::operator()"
source_path: "cpp/utility/hash/operator"
category: "utility"
---

Specializations of [std::hash](/cpp/utility/hash/) should define an operator() that:

## Parameters
- `key`: the object to be hashed

## Return value
A [std::size_t](/cpp/types/size_t/) representing the hash value.

## Example
```cpp
#include <cstdint>
#include <functional>
#include <iostream>
#include <string>
 
struct Employee
{
    std::string name;
    std::uint64_t ID;
};
 
namespace std
{
    template <>
    class hash<Employee>
    {
    public:
        std::uint64_t operator()(const Employee& employee) const
        {
             // computes the hash of an employee using a variant
             // of the Fowler-Noll-Vo hash function
             constexpr std::uint64_t prime{0x100000001B3};
             std::uint64_t result{0xcbf29ce484222325};
 
             for (std::uint64_t i{}, ie = employee.name.size(); i != ie; ++i)
                 result = (result * prime) ^ employee.name[i];
 
             return result ^ (employee.ID << 1);
         }
    };
}
 
int main()
{
    Employee employee;
    employee.name = "Zaphod Beeblebrox";
    employee.ID = 42;
 
    std::hash<Employee> hash_fn;
    std::cout << hash_fn(employee) << '\n';
}
```
