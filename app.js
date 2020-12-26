const tl = gsap.timeline({ default: { ease: "power1.out" } });

//  to가 기존에 있던 text를 어떻게 애니메이션 시킬 것인가를 의미하는 듯.
// duration이야 1초동안 그 애니메이션을 실행하라는 거고, stagger는 .text에 해당하는게 여러개이기 떄문에
// 0.25간격으로 진행시키라는 것 같다.

// 이러한 것들은 연쇄적으로 일어나는 것 같다. 그러니까 동시다발적인게 아니라,
// 한줄이 끝나고 한줄이 나타나는 것 같다. sync 적으로 움직인달까..

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 });
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

// 맨 마지막에 "-=1"을 붙인거는 위에있는 fromto랑 동시에 일어나게 하려고 하기 위함이다.
// 보통은 끝나고 다음것을 실행하기 때문에, 동시에 하려면은 이와 같은 작업이 필요하다고 생각하면 된다.
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
