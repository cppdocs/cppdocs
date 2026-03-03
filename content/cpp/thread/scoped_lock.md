---
title: "std::scoped_lock"
source_path: "cpp/thread/scoped_lock"
header: "<mutex>"
category: "thread"
since: "C++17"
---

The class scoped_lock is a mutex wrapper that provides a convenient [RAII-style](https://en.wikipedia.org/wiki/Resource_Acquisition_Is_Initialization) mechanism for owning zero or more mutexes for the duration of a scoped block.

## Declarations
```cpp
template< class... MutexTypes >
class scoped_lock;
```
_(since C++17)_

## Notes
A common beginner error is to "forget" to give a scoped_lock variable a name, e.g. std::scoped_lock(mtx); (which default constructs a scoped_lock variable named mtx) or std::scoped_lock{mtx}; (which constructs a prvalue object that is immediately destroyed), thereby not actually constructing a lock that holds a mutex for the rest of the scope.

## Example
```cpp
#include <chrono>
#include <functional>
#include <iostream>
#include <mutex>
#include <string>
#include <thread>
#include <vector>
using namespace std::chrono_literals;
 
struct Employee
{
    std::vector<std::string> lunch_partners;
    std::string id;
    std::mutex m;
    Employee(std::string id) : id(id) {}
    std::string partners() const
    {
        std::string ret = "Employee " + id + " has lunch partners: ";
        for (int count{}; const auto& partner : lunch_partners)
            ret += (count++ ? ", " : "") + partner;
        return ret;
    }
};
 
void send_mail(Employee&, Employee&)
{
    // Simulate a time-consuming messaging operation
    std::this_thread::sleep_for(1s);
}
 
void assign_lunch_partner(Employee& e1, Employee& e2)
{
    static std::mutex io_mutex;
    {
        std::lock_guard<std::mutex> lk(io_mutex);
        std::cout << e1.id << " and " << e2.id << " are waiting for locks" << std::endl;
    }
 
    {
        // Use std::scoped_lock to acquire two locks without worrying about
        // other calls to assign_lunch_partner deadlocking us
        // and it also provides a convenient RAII-style mechanism
 
        std::scoped_lock lock(e1.m, e2.m);
 
        // Equivalent code 1 (using std::lock and std::lock_guard)
        // std::lock(e1.m, e2.m);
        // std::lock_guard<std::mutex> lk1(e1.m, std::adopt_lock);
        // std::lock_guard<std::mutex> lk2(e2.m, std::adopt_lock);
 
        // Equivalent code 2 (if unique_locks are needed, e.g. for condition variables)
        // std::unique_lock<std::mutex> lk1(e1.m, std::defer_lock);
        // std::unique_lock<std::mutex> lk2(e2.m, std::defer_lock);
        // std::lock(lk1, lk2);
        {
            std::lock_guard<std::mutex> lk(io_mutex);
            std::cout << e1.id << " and " << e2.id << " got locks" << std::endl;
        }
        e1.lunch_partners.push_back(e2.id);
        e2.lunch_partners.push_back(e1.id);
    }
 
    send_mail(e1, e2);
    send_mail(e2, e1);
}
 
int main()
{
    Employee alice("Alice"), bob("Bob"), christina("Christina"), dave("Dave");
 
    // Assign in parallel threads because mailing users about lunch assignments
    // takes a long time
    std::vector<std::thread> threads;
    threads.emplace_back(assign_lunch_partner, std::ref(alice), std::ref(bob));
    threads.emplace_back(assign_lunch_partner, std::ref(christina), std::ref(bob));
    threads.emplace_back(assign_lunch_partner, std::ref(christina), std::ref(alice));
    threads.emplace_back(assign_lunch_partner, std::ref(dave), std::ref(bob));
 
    for (auto& thread : threads)
        thread.join();
    std::cout << alice.partners() << '\n'  << bob.partners() << '\n'
              << christina.partners() << '\n' << dave.partners() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2981 | C++17 | redundant deduction guide from scoped_lock<MutexTypes...> was provided | removed |

## See also
- [unique_lock](/cpp/thread/unique_lock/)
- [lock_guard](/cpp/thread/lock_guard/)
