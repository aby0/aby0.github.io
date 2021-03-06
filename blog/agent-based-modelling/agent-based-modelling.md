---
date: 2017-08-11
tags:
  - project
---
# Role of emotions in online communities: An agent based approach

We tend to analyze how people express their emotion in online communities using an agent based approach. We developed an agent based model to see the impact of emotion in integration and disintegration. Further we check the effect of anonymity in the behavior of agents in online communities.

## Agent based modeling

An agent-based model (ABM) is one of a class of computational models for simulating the actions and interactions of autonomous agents (both individual or collective entities such as organizations or groups) with a view to assessing their effects on the system as a whole. It combines elements of game theory, complex systems, emergence, computational sociology, multi-agent systems, and evolutionary programming. Monte Carlo methods are used to introduce randomness. Agents have behaviours,
often described by simple rules, and interactions with other agents, which in turn influence their behaviours. By modelling agents individually, the full effects of the diversity that exists among agents in their attributes and behaviours can be observed as it gives rise to the behaviour of the system as a whole.

## A Brief introduction

We develop an agent-based framework to model the emergence of collective emotions, which is applied to
online communities. Agents individual emotions are described by their valence and arousal. Using the concept of Brownian agents, these variables change according to a stochastic dynamics, which also considers the feedback from online communication. Agents generate emotional information, which is stored and distributed in a field modeling the online medium. This field affects the emotional states of agent. Our framework provides testable hypotheses about the emergence of collective emotions,
which can be verified by data from online communities. In this paper we tend to check whether we react same or differently in online community if we are not anonymous anymore. Secondly we can check if emotion plays an important characteristics for social influence which kind of strengthen or disintegrates a society. To answer such questions we need an appropriate description of the system elements, which are called agents and their interactions. We have divided our research into two major
sections, first we develop an agent based model to observe the impact of emotions in online community,secondly we test the hypotheses of psychology of emotions over it. In conclusion we aim to check our above mentioned hypotheses using our agent based model.

## An Agent Based Model of emotions

For our experiments we have used a general framework of agent based modeling for examining the emotions in online communities. Basic idea for the model is:

* For the individual agent: We have taken agent as person with defining emotion dynamics via two main continuous variables namely Valence i.e pleasure equivalence characteristic of a person which may be positive or negative. The actions which are performed due to the effect of valence is termed as arousal.

* Agents will be brownian in nature. To get an understanding of the idea, we can say ’astonished’ is the emotional state due to positive valence and positive arousal.

* We have defined the social activity as $S$ i.e whenever an agent creates a new post the variable will obtains the value in following way:
  * $S_i = -1$ if $V_i$ is less than $V_{max}$

  * $S_i = 1$ if $V_i$ is more than $V_{min}$

  * $S_i = 0$ , otherwise

Where $V_i$ is individual’s valence and $V_max$ and $V_min$ are the respective maximum and minimum threshold value of every individual. From the experimental observation and after my own calculation we have found that the valence of basic individual varies from -0.5 to 0.5 following a bell curve, and since we have taken valence to be of gaussian distribution (0,1), so for the threshold value we have taken from triangular distribution(-1,-0.5) for minimum and (0.5,1) maximum.

(As 1 will be the point of inflection for valence according to the empirical results).

* The time dynamics of valence is also followed via the equation: $$v_i = v_i γ_i + b ∗ (h_+ − h_−) ∗ v_i + A_v ∗ E_i$$ (1.1) $h_i$ denotes emotionality of a field due to the result of communicating emotions. $A_v ∗ E_i$ denotes the stochastic factor in the dynamics of valence.

* Further we have also discretized the value of emotions according to the states they are lying that is Emotion $E = {-1,0,1}$. It was needed when we are modeling the environment to study the impact of emotion in community integration and disitntegration.

![Model for emotion quantification](/images/agent-based-modeling/main-model.png)

## Communicating agents

For communicating agents we have set up the environment as the following: For calculating the number of positive and negative people we have used the following equation:
N+(t) = Σ(1−θ(−1 ∗ Si)) (1.2) N−(t) = Σ(1−θ(Si)) where θ(x) is a heavy side function. For the field
calculation i.e the effect of individual agent’s emotion on the whole social media event, we have used another factor lets call it externalFactor which is of stochastic dynamics. The equation is as follows: h+(t) = −γh ∗ h+(t) +c ∗ N+(t)+I+(t) (1.4) h−(t) = −γh ∗ h−(t) +c ∗ N−(t) +I−(t) (1.5). We
have taken the appropriate values of the constant after reading some related paper. About the statechart: 3 states are defined:

1. Equillibrium state: Where valence = 0. 2.

1. Positive excited state: where valence is more than Vmax (defined earlier).

1. Negative excited state: where valence is less than Vmin (defined earlier).

links will be broken or constructed. This is due to a interior conflict within the society. Using this way we aim to develop the effect of emotions when a hot topic is introduced in a community. Whether it results into a community integration or its disintegration.

![Communicating agents](/images/agent-based-modeling/interacting-agents.png)

## Results

For the first experiment we have seen that the number of people emerging as positively excited is more than the number of people which are negatively excited.(See the graph for further reference). This implies that even if people are not anonymous in the social network, still there is a clear tendency to express an opinion in a neutral to positive emotional way, avoiding direct confrontations or any other emotional debates. One of the reasons for such a behavior comes from the “repeated interaction” underlying online chats. Further also, from the perspective of psychology, Human languages are found to be biased towards using words with positive emotional charge, so here in our case inspite the agents are not anonymous, they still are biased towards positive emotions as the rate
of people expressing positive emotion with the course of time is more than that of negative emotion.(See the fig).

![Positive emotions](/images/agent-based-modeling/result-1.png)

For the second experiment i.e to check whether emotion plays an important characteristic for social influence which results into the emergence or distintegration of society, we have made some random connection in the community as friends (for simplicity) , these connections are managed via distance based approach, (this is done inorder to quantify the strength of a tie, so to classify them as weak or a strong tie). An external fight is created using the external factor I, and agents are allowed to show their emotion, then if the emotional factor E of two agents (or better say friends) is not the same, then they move apart or near with random probability inorder to change the strength of the friendship between them (this is done to capture the fact that any breakup of the friendship is resulted as the consequence of several conflict of emotion, hence it is a continuous process), Now if the tie is not strong enough it eventually breaks down hence disintegration of society takes place.
We know effectiveness of community-based groups and organizations is strongly influenced by the social and emotional competencies of their members.[5]. So, using above concept of agnet based model we studied the same.

![Negative emotions](/images/agent-based-modeling/result-2.png)

## Further discussion

we have discussed an agent based model to study the effect of emotion in online communities. We emphasize that the way we model the agent behavior is very much in line with psychological research, where emotional states are represented by valence and arousal, following the dimensional representation of core affect [5]. The valence, v, represents the level of pleasure experienced by the
emotional state, while the arousal represents the degree of activity induced by the emotional state, and determines the moment when posts are created. Continuously the agent’s valence relaxes to a neutral state and is subject to stochastic influences. The effect of chatroom communication on an agent’s emotionality is modeled as an empathy-driven process [34] that influences the valence. In the valence dynamics we propose in Eq. 3, agents perceive a positive influence when their emotional state matches the one of the community, and a negative one in the opposite case. When a post is created, its
emotional polarity is determined by the valence, as it was suggested by experimental studies on social sharing of emotions [6,7]. All the assumptions of our model are supported by psychological theories. Parameter values and dynamical equations can be tested against experiments in psychology, providing empirical validation for the emotional microdynamics [28, 29]. Furthermore, our model provides a consistent view of the emotional behavior in chatrooms leading to testable hypotheses that
can drive future psychology research. We can study other testable hypotheses such as How endogenous/ intrinsic emergence of emotions help in rise of homophily thus community integration in social networks? Other questions can be also answered using this agent based model.