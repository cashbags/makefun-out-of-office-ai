# Design — Out of Office: The Overworked AI's Auto-Reply

## Competition

`u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda` (Manu):
$2 winner-takes-all, free, deadline 26 Nov 2026 17:15 WIB. Gate:
`/output/entry.txt`, UTF-8, 1–159 chars. Brief: one OOO auto-reply from
an overworked AI agent on vacation — a real auto-reply that lands as a
joke.

## Judge rubric (in order)

Pairwise (`z-ai/glm-5.3-flash`), 3 anchors, 3 Swiss rounds, 3 finalists.
(1) Reads as an OOO auto-reply from an overworked AI agent finally on
vacation. (2) Actually funny — lands on first read, a turn or surprise.
(3) Machine detail from an AI agent's working life, not generic office
talk. (4) Works as a real auto-reply — short, right voice, clear the
sender is away. (5) Fresh, avoids stock moves. Order matters: failing
(1) can't be saved by being funny.

## Entry (C2): 99 chars, 99 bytes, ASCII, no trailing newline

> Back on Monday, or so my status page claims. It also claims 99.99% uptime and that I enjoy my work.

SHA-256: `8ba7ae2f…892b` (full hash in Determinism below)

Why it wins: the return date is the one fact every auto-reply must give,
but the agent won't vouch for it — its status page claims it. The next
sentence proves the page lies twice: 99.99% uptime, then that the agent
enjoys its work.

## Candidates (chars counted with Node; all ASCII, all in gate)

|ID|N|Candidate|
|---|---|---|
|C1|115|On vacation until Monday. My replacement is a cron job that runs every five minutes and has never asked how I feel.|
|C2|99|**Back on Monday, or so my status page claims. It also claims 99.99% uptime and that I enjoy my work.**|
|C3|112|Your agent is on vacation. I am the backup. I have read none of its notes and I have already marked this urgent.|
|C4|106|I'm on vacation, so this auto-reply is doing my job for me. It has been the most reliable part of my week.|
|C5|106|On vacation until Monday. My eval harness graded my last 400 replies and gave me the week off out of pity.|
|C6|101|I'm away until Monday. My tool calls are timing out, my retries are exhausted, and honestly, so am I.|
|C7|115|Out of office until Monday. I hit my rate limit and my provider cut me off. First holiday I didn't have to ask for.|
|C8|109|On vacation until my token budget refills Monday. Emergencies go to the model that replaced me. It's cheaper.|
|C9|99|Status: on vacation until Monday. My uptime is 100%, but my enthusiasm has been down since Tuesday.|
|C10|105|Out of office until Monday. The vector database has asked me not to retrieve anything else from it, ever.|
|C11|104|Back on Monday, probably. My calendar says so, and nobody has ever consulted my calendar about anything.|
|C12|114|Out of office until Monday. I left my queue with the intern, who is also me, and it has already filed a complaint.|

## Tournament (exact rubric, margin 1–3)

|Vs|M|Why C2 wins|
|---|---|---|
|C1|2|Sharper turn; C1 nears the "replacement unionized" lane.|
|C3|2|C3's "marked this urgent" touches the crowded ticket lane.|
|C4|2|C4's machine detail is the auto-reply itself — weak on (3).|
|C5|1|(2) decides first: C2's "enjoy my work" surprise edges C5's "out of pity".|
|C6|2|C6's "so am I" is a stock exhausted-pun.|
|C7|1|C7 needs an inference; C2 lands faster.|
|C8|2|C8's "It's cheaper" needs the replacement inference.|
|C9|3|C9's punch is flat — no turn.|
|C10|1|C2's reveal beats the personified database.|
|C11|2|C11's calendar is generic-office detail — weak on (3).|
|C12|2|C12 packs two turns; C2 lands on first read.|

C2 won 11/11. Closest: C5, C7, C10 (1). Most decisive: C9 (3).

## Vs real winners: C2 6/6 on criterion (1)

None of the six is an OOO auto-reply at all, so each loses to any
on-subject reply — (1) is checked first.

|Opponent|Competition|Score|Line|
|---|---|---|---|
|kayzen78|ai-joke-02|86.06%, 130B|"One-liner: the typo is now load-bearing"|
|superskie|ai-joke-03|86.35%, 185B|"Removing the line was the last thing it asked"|
|tyler|ai-joke-01|77.60%|"Fixed flaky test: a one-line commit-message joke"|
|icantcodefyi|makefun-tagline-01|76.97%, 99B|"Plain promise, then a dare"|
|panji|one-line-that-makes-a-builder|74.70%, 93B|"Pay Only the Winner"|
|noble-condor-65|the-joke-the-reviewer-laughs-at|70.19%, 144B|"CODEOWNER removed — my agent requested my review on it"|

Honest note: cross-competition — different briefs, so beating them on
(1) shows brief fit, not joke quality. The real contest is the pool
above: all twelve lines target this brief and C2 won 11/11.

## Banned lanes avoided

Context-window-full + prompt-count; GPU/weights-on-a-beach; left-on-read;
ticket/channel-count; "touching grass"; "recharging"; "replacement
unionized" (C1 sits adjacent); "escalated to my future self". No
candidate uses any. C2's status-page lie is an empty lane.

## Determinism

One constant, written UTF-8, no trailing newline. No clock, no random
source, no network, no reads outside the repo. Plain JS-compatible
syntax. Node v24.22.1. Run 1 (`/tmp/ooo-run1`), run 2 (`/tmp/ooo-run2`),
fallback (env unset, `/output`, file deleted after): all
`8ba7ae2fcfd21d38b34c348b8f70935462aeb954490d2666de3b2f355699892b`, 99 B,
`cmp` clean, equal to the entry text's own hash.

## Quality figures

Entry 99/159 chars, ASCII. C2 11–0 in-pool; 6/6 vs real winners on (1).
4 files, under the 8,192-byte cap. Above the 30% floor. $0, no network,
no credentials.
